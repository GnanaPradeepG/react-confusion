import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    renderDish(dish) {
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

    renderComments() {
        let options = { year: 'numeric', month: 'short', day: 'numeric' };
        if (this.props.selectedDish != null) {
            let comments = this.props.selectedDish.comments;
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className=" list-group list-group-flush">
                        {
                            comments.map((comment, index) => {
                                return (
                                    //unique key to handle key in list error in console
                                    <li key={this.props.selectedDish.id + index} className="list-group-item">
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

    render() {

        return (
            <div className="row">
                
                    {this.renderDish(this.props.selectedDish)}

                    {this.renderComments()}
                </div>
        )
    }
}
export default DishDetail;