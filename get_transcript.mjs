import https from 'https';

const videoId = 'hjdCyu6tKxs';
const url = `https://www.youtube.com/watch?v=${videoId}`;

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8',
      }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function fetchXml(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
      }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function getTranscript() {
  console.log('Buscando página do vídeo...');
  const html = await fetchUrl(url);

  // Extract captions track URL from ytInitialPlayerResponse
  const match = html.match(/"captionTracks":(\[.*?\])/);
  if (!match) {
    console.error('Nenhuma legenda encontrada para este vídeo.');
    process.exit(1);
  }

  const tracks = JSON.parse(match[1]);
  console.log('Legendas disponíveis:');
  tracks.forEach((t, i) => console.log(`  [${i}] ${t.languageCode} - ${t.name?.simpleText || ''}`));

  // Prefer Portuguese, fallback to first
  let track = tracks.find(t => t.languageCode === 'pt-BR') ||
              tracks.find(t => t.languageCode === 'pt') ||
              tracks.find(t => t.kind === 'asr') ||
              tracks[0];

  console.log(`\nUsando legenda: ${track.languageCode} - ${track.name?.simpleText || ''}`);

  const xmlUrl = track.baseUrl;
  console.log('URL da legenda:', xmlUrl);
  const xml = await fetchXml(xmlUrl);
  console.log('Primeiros 500 chars do XML:', xml.slice(0, 500));

  // Parse XML manually
  const textMatches = [...xml.matchAll(/<text[^>]*>([\s\S]*?)<\/text>/g)];
  const lines = textMatches.map(m =>
    m[1]
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/<[^>]+>/g, '')
      .trim()
  ).filter(Boolean);

  const transcript = lines.join(' ');
  console.log('\n=== TRANSCRIÇÃO ===\n');
  console.log(transcript);
  console.log('\n=== FIM DA TRANSCRIÇÃO ===');

  // Save to file
  const fs = await import('fs');
  const filename = `transcript_${videoId}.txt`;
  fs.default.writeFileSync(filename, transcript, 'utf8');
  console.log(`\nTranscrição salva em: ${filename}`);
}

getTranscript().catch(console.error);
