import { Github, FileVideo, Upload, Wand2 } from 'lucide-react';
import { Button } from "./components/ui/button";
import { Separator } from './components/ui/separator';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Slider } from './components/ui/slider';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './components/ui/select';

export function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Upload AI</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Developed with 🧡 on NLW AI.</span>
          
          <Separator orientation='vertical' className='h-6' />
          
          <Button variant={"outline"}>
            <Github className='w-4 h-4 mr-2'/>
            Github
          </Button>
        </div>
      </div>

      <main className='flex-1 p-6 flex gap-6'>
        <div className='flex flex-col flex-1 gap-4'>
          <div className='grid grid-rows-2 gap-4 flex-1'>
            <Textarea 
              className='resize-none p-4 leading-4'
              placeholder='Include the prompt for the AI here.'
            />
            <Textarea 
              className='resize-none p-4 leading-4'
              placeholder='Generated result.' 
              readOnly
            />

          </div>

          <p className='text-sm text-muted-foreground'>
            Remember: you can use the variable <code className='text-violet-400'>
              {'{transcription}'}</code> in 
            your prompt to add content from the transcription of the selected video.
          </p>
        </div>
        <aside className='w-80 space-y-6'>

          <form className='space-y-6'>
            <label 
              htmlFor="video" 
              className='flex flex-col items-center justify-center gap-2 border border-dashed rounded-md aspect-video cursor-pointer text-sm text-muted-foreground hover:bg-primary/10'
            >
              <FileVideo className='h-6 v-6'/>
              Select a video
            </label>

            <input type='file' id='video' accept='video/mp4' className='sr-only' />

            <Separator/>

            <div className='space-y-2'>
              <Label htmlFor="transcription-prompt">Transcription prompt</Label>
              <Textarea 
                id="transcription-prompt" 
                className='min-h-20 leading-relaxed'
                placeholder='include keywords mentioned in the video, separated by commas ( , )'
              />
            </div>

            <Button type='submit' className='w-full'>
              Load vídeo
              <Upload className='w-4 h-4 ml-2'/>
            </Button>
          </form>

          <Separator/>

          <form className='space-y-6'>

            <div className='space-y-2'>
                <Label>Prompt</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a prompt..."/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="title">YouTube Title</SelectItem>
                    <SelectItem value="description">YouTube Description</SelectItem>
                  </SelectContent>
                </Select>
            </div>

            <div className='space-y-2'>
              <Label>Model</Label>
              <Select defaultValue='gpt3.5' disabled>
                <SelectTrigger>
                  <SelectValue></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>

              <span className='block text-xs italic text-muted-foreground'>You will can customize this option soon.</span>

            </div>

            <Separator />

            <div className='space-y-4'>
              <Label>Temperature</Label>
              
              <Slider 
                min={0} 
                max={1}
                step={0.1}
              />

              <span className='block text-xs italic text-muted-foreground leading-relaxed'>
                Higher values generate more creative text but could be more imprecise.
              </span>

            </div>

            <Separator/>

            <Button type='submit' className='w-full'>
              Execute
              <Wand2 className='w-4 h-4 ml-2'/>
            </Button>


          </form>

        </aside>
      </main>

    </div>
  )
}

