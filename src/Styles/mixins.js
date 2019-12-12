// Repetead styles stay here
export const centerContent = `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const smoothTransition =  `transition: All ease-in-out .3s`

export const positionAbsoluteCenter = (t, l) => `
  position: fixed;
  top: ${t}%;
  left: ${l}%;
  transform: translate(-50%, -50%); 
`