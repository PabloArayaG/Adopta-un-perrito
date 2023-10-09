import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({ image, title, subtitle, tagText, tagColor }) => {
    return (
        <>
        <Card style={{ width: "18rem" }}>
        <Card.Img className="card-img" src={image} alt={title} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div className="card-content"> {}
            <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
            <Tags text={tagText} color={tagColor} />
            </div>
        </Card.Body>
        </Card>
    </>
    );
};

export default MyCard;