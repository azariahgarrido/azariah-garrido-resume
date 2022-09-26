import pdf from './Assets/Resume2022.pdf';
import downloadIcon from './Assets/download.png';

export default function Resume() {
    return (
        <div className='resumeBack'>
            <div className='flex'>
                <a href={pdf} target="_blank" rel="noreferrer">
                    <div className='download'>DOWNLOAD Resume.pdf</div>
                    <img className='downloadI' src={downloadIcon} alt='Download'></img>
                </a>
            </div>
        </div>
    )
}