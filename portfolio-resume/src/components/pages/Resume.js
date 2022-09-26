import pdf from './Assets/Resume2022.pdf';

export default function Resume() {
    return (
        <a href={pdf} target="_blank" rel="noreferrer">Download Resume.pdf</a>
    )
}