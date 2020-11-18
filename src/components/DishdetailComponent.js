import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const RenderDish = ({ dish }) => {
    if (dish != null)
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    else
        return (
            <div></div>
        );
}

const RenderComments = ({comments}) => {
    let options = { year: 'numeric', month: 'short', day: 'numeric' };
    if (comments != null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className=" list-group list-group-flush">
                    {
                        comments.map((comment, index) => {
                            return (
                                //unique key to handle key in list error in console
                                <li key={index} className="list-group-item">
                                    {comment.comment}
                                    <br />
                                        -- {comment.author} ,  {new Date(comment.date).toLocaleDateString("en-US", options)}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }

}

const DishDetail = (props) => {
    
    if (props.selectedDish !== undefined) {
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.selectedDish} />
                    <RenderComments comments={props.selectedDish.comments} />
                </div>
            </div>
        )
    }
    else {
        return(
            <div></div>
        )
    }
}

export default DishDetail;