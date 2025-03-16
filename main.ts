import { EdgeSpeechTTS } from '@lobehub/tts';
import { Buffer } from 'buffer';
import fs from 'fs';
import path from 'path';



const text_to_speech_map3 = async(input)=>{
  console.log(`文本转语音，字体长度${input.length}`,);
  const tts = new EdgeSpeechTTS({ locale: 'en-US' });
  const payload = {
    input,
    options: {
      voice: 'zh-CN-YunjianNeural',
      // voice: 'zh-CN-XiaoxiaoNeural',
  
    },
  };
  
  const response = await tts.create(payload);
  
  const mp3Buffer = Buffer.from(await response.arrayBuffer());
  const speechFile = path.resolve('./speech.mp3');
  fs.writeFileSync(speechFile, mp3Buffer);
  console.log("转换完成！")
  return speechFile
}
// 白天刷不到晚上逃不掉
const text= `1111111  `
text_to_speech_map3(text)

