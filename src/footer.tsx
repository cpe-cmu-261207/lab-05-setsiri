type propsFooter = {
    copyright: string;
}

const Footer =  (props: propsFooter) => {
    return (
        <div>
            <p className='text-center text-gray-400'>{props.copyright}</p>
        </div>
    )
}

export default Footer