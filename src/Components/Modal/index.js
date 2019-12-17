import React from 'react';

// Icons 
import { MdImage, MdWebAsset, MdVideocam, MdSmartphone, MdDesktopMac } from 'react-icons/md'
 
// Styles
import { ModalBox } from './styles'

export default ({ work, showElement }) => {

  const img = <MdImage size={26} className="icon"/>,
        web = <MdWebAsset size={26} className="icon"/>,
        video = <MdVideocam size={26} className="icon"/>,
        phone = <MdSmartphone size={26} className="icon"/>,
        desktop = <MdDesktopMac size={26} className="icon"/>

  const icons = [img, web, video, phone, desktop]

  // This chooses which icon to display
  const switchIcons = el => {
    switch (el.type) {
      case "Site":
          return icons[1] 
      case "Video":
        return icons[2]
      case "Phone":
        return icons[3]
      case "Desktop":
          return icons[4]  
      default:
        return icons[0]
    } 
  }

return (  
  <ModalBox item={work} className="Modals" onClick={() => showElement(work)}>  
    <div className="details">  
      <h2 className="name">{work.name}</h2>
      <div className="what">#{work.what}</div> 
      { switchIcons(work) } 
    </div>   
  </ModalBox>   
)
}