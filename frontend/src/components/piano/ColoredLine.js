const ColoredLine = ({ color }) => (
    
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 4,
            
            
            marginLeft: '10px',
            marginRight: '10px'
        }} className="staff"
    />
);

export default ColoredLine;