import { ListGroup, ListGroupItem, Badge } from "react-bootstrap";
import './index.css'

function RankingList({id, data}) {
    return (
        <ListGroup id={id} as="ol" numbered>
            {data.sort((a, b) => b.score - a.score).map((item: any) =>
            <>
                <ListGroupItem>
                    {item.group}
                    <Badge pill>
                        {item.score}
                    </Badge>
                    <br/>
                    {new Intl.DateTimeFormat('en-US', {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                    }).format(new Date(item.date))}
                </ListGroupItem>
            </>)}
        </ListGroup>
    )
}

export default RankingList