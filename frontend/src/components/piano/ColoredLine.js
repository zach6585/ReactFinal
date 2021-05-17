const ColoredLine = ({ color, height, ID }) => (
    
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: height,
            marginLeft: '10px',
            marginRight: '10px',
            marginBottom: `0px`,
            marginTop: `0px`
        }} className="staff" id={ID}
    />
);

export default ColoredLine;