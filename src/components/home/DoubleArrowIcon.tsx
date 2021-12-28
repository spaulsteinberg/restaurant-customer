import Button from 'react-bootstrap/Button';

type DoubleArrowIconProps = {
    width:number;
    height:number;
    fill:string;
    handleDownscrollClick: () => void;
}

const DoubleArrowIcon = ({ width, height, fill, handleDownscrollClick }:DoubleArrowIconProps) => {
    return (

        <div className='widescreen-button-container'>
            <Button variant="light" className="pulsating-button" onClick={handleDownscrollClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
            </Button>
        </div>
    )
}

export default DoubleArrowIcon
