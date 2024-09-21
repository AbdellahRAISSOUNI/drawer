import React, { useEffect, useState } from 'react'
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { FILE } from '../../dashboard/_components/FileList';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
function Canvas({onSaveTrigger,fileId,fileData}:{onSaveTrigger:any,fileId:any,fileData:FILE}) {
  
    const [whiteBoardData,setWhiteBoardData]=useState<any>();
    
    const updateWhiteboard=useMutation(api.files.updateWhiteboard)
    useEffect(()=>{
        onSaveTrigger&&saveWhiteboard();
    },[onSaveTrigger])
    const saveWhiteboard=()=>{
        updateWhiteboard({
            _id:fileId,
            whiteboard:JSON.stringify(whiteBoardData)
        }).then(resp=>console.log(resp))
    }
    return (
      <div style={{ height: "100vh" }}>
        {fileData&& <Excalidraw theme="light" 
        initialData={{
          elements:fileData&&JSON.parse(fileData.whiteboard)
        }}
        onChange={(excalidrawElements, appState, files)=>setWhiteBoardData(excalidrawElements)}>
          <MainMenu>
            <MainMenu.DefaultItems.LoadScene />
            <MainMenu.DefaultItems.ClearCanvas />
            <MainMenu.DefaultItems.SaveAsImage />
            <MainMenu.DefaultItems.SaveToActiveFile />
            <MainMenu.DefaultItems.Export />
            <MainMenu.DefaultItems.Help />
            <MainMenu.DefaultItems.ChangeCanvasBackground />
          </MainMenu>
  
          <WelcomeScreen>
            <WelcomeScreen.Hints.HelpHint />
            <WelcomeScreen.Hints.MenuHint />
            <WelcomeScreen.Hints.ToolbarHint />
          </WelcomeScreen>
  
  
          <WelcomeScreen.Center>
          <WelcomeScreen.Center.Logo >
    <img src="/logobl.png" alt="Custom Logo" height={300} width={300} />
  </WelcomeScreen.Center.Logo>
  
          <WelcomeScreen.Center.Heading>
                Welcome To Eraser!
              </WelcomeScreen.Center.Heading>
              <WelcomeScreen.Center.Menu>
                <WelcomeScreen.Center.MenuItemLink href="https://github.com/AbdellahRAISSOUNI/drawer">
                  Drawer GitHub
                </WelcomeScreen.Center.MenuItemLink>
                <WelcomeScreen.Center.MenuItemHelp />
              </WelcomeScreen.Center.Menu>
              </WelcomeScreen.Center>
        </Excalidraw>}
      </div>
    );
  }
  
  export default Canvas;