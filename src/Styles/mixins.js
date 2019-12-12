import { backgrounColor } from './variables'

// Repetead styles stay here
export const centerContent = `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const smoothTransition =  `transition: All ease-in-out .3s`

export const positionAbsoluteCenter = (t, l) => `
  position: absolute;
  top: ${t}%;
  left: ${l}%;
  transform: translate(-50%, -50%); 
`

export const PageContainer = `
  width: 90%; 
  min-height: 100%;
  position: absolute;
  top: 0;
  right: 0; 
  z-index: 1;
  background: ${backgrounColor};  
  overflow-y: sroll; 

  * {
    overflow: hidden;
  }
`