import { useFilePicker } from "use-file-picker";

const videoFormats = [
    '.mp4',
    '.mov',
    '.wmv',
    '.flv',
    '.avi',
    '.avchd',
    '.webm',
    '.mkv'
];

function IndexPage() {
    // const [
    //     openFilePicker
    // ] = useFilePicker({
    //     multiple: false,
    //     readAs: 'DataURL',
    //     // accept: videoFormats
    //     'readFilesContent': true,
    // });
    return (
        <div>
            <input type='file' />
        </div>
    );
}

export default IndexPage;
