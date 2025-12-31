import folderImage from '../../assets/folderImage.png'

export function FolderImage() {
  return (
    <img
      className='w-[20px] h-[20px] object-contain'
      alt='Normal'
      src={folderImage} />
  )
}