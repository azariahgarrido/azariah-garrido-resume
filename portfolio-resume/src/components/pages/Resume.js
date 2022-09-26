import pdf from './Assets/Resume2022.pdf';
import downloadIcon from './Assets/download.png';
import mongoIcon from './Assets/R.jpg';
import expressJs from './Assets/express.jpg';
import reactJs from './Assets/reactJs.png';
import nodeJs from './Assets/nodeJs.jpg';

export default function Resume() {
    return (
        <div>
            <div className="resumeTop">RESUME.pdf</div>
            <div className='resumeBack'>
                <div className='flex'>
                    <div>
                        <a href={pdf} target="_blank" rel="noreferrer">
                            <div className='download'>DOWNLOAD</div>
                            <img className='downloadI' src={downloadIcon} alt='Download'></img>
                        </a>
                    </div>
                    <div className="mernStack">
                        <img className='downloadI' src={mongoIcon} alt='mongoIcon'></img>
                        <img className='downloadI' src={expressJs} alt='expressJs'></img>
                        <img className='downloadI' src={reactJs} alt='reactJs'></img>
                        <img className='downloadI' src={nodeJs} alt='nodeJs'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}