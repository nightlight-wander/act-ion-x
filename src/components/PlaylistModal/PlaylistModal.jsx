
const PlaylistModal = ({children,show,close}) => {

  return (
    <div>
        {show &&
        <div>{children}
        <button onClick={close}>X</button></div>
        }
    </div>
  )
}

export {PlaylistModal};