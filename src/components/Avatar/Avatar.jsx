import './Avatar.css';
function Avatar({src, alt}) {
    return (
        <div className="userImg">
        <img className='avatar' src={src} width= '128'  height='128' alt={alt} />
        </div>
        );
}
export default Avatar