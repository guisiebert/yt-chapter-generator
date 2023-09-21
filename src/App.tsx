import { useState } from "react"
import { Button } from "./components/ui/button"
import { FileVideo, Github, Upload, Wand2 } from 'lucide-react'
import { Textarea } from "./components/ui/textarea"
import { Separator } from "@radix-ui/react-separator"
import { Label } from "./components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import { Slider } from "./components/ui/slider"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">chapta.ai</h1>


        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Desenvolvido por Gui Siebert</span>

          <Button variant={"outline"}> 
            <Github className="w-4 h-4 mr-2"/>
            GitHub
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4" >
          <div className="grid grid-rows-2 gap-4 flex-1">
              <Textarea
                className="resize-none p-4 leading-relaxed "
                placeholder="Inclua o texto para a IA"
              />
              <Textarea
                className="resize-none p-4 leading-relaxed "
                placeholder="Resultado gerado pela IA"
                readOnly
              />

          </div>
          <p className="text-sm text-muted-foreground">Lembre-se, você precisa se lembrar do <code className="text-sky-900">{"{código}"}</code></p>
        </div>

        <aside className="w-80 space-y-6">
          <form className="space-y-6" >
            <label 
              htmlFor="video"
              className="border flex rounded-md aspect-video items-center justify-center cursor-pointer border-dashed text-sm flex-col gap-2 text-muted-foreground hover:bg-primary/5"
            > 
            <FileVideo className=""/>
            Selecione um vídeo 
            </label>
            <input type="file" id="video" accept="video/mp4" className="sr-only"  />
            
            <div className="border-b"></div>

            <div className="space-y-1">
              <Label htmlFor="transcription-prompt">Prompt de transcrição</Label>
              <Textarea 
                id="transcription-prompt" 
                className="min-h-20 leading-relaxed "
                placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula"
              />
            </div>

            <Button type="submit" className="w-full">
              Carregar vídeo
              <Upload className="w-4 h-4 ml-2"/>
            </Button>
          </form>

          <div className="border-b"></div>

          <form className="space-y-6 ">
            <div className="space-y-2">
              <Label>Prompt </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Escolha um template"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yt-chapters">Capítulos para YouTube</SelectItem>
                  <SelectItem value="yt-description">Descrição para YouTube</SelectItem>
                  <SelectItem value="sp-chapters">Capítulos para Spotify</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Modelo </Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground italic">Você poderá customizar essa sessão em breve</p>
            </div>

          <div className="border-b"></div>

          <div className="space-y-4">
              <Label>Temperatura </Label>
              <Slider
                min={0}
                max={1}
                step={0.1}

              />
              <p className="text-xs text-muted-foreground italic  leading-relaxed">Valores mais altos tendem a retornar um resultado mais criativo, porém com possíveis erros</p>
            </div>

          <div className="border-b"></div>

          <Button type="submit" className="w-full">
            Executar
            <Wand2 className="w-4 h-4 ml-2"/>
          </Button>

          </form>




        </aside>
      </main>
    
    </div>
  )
}

export default App
