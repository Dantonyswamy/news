import React from 'react';

class NewsCard extends React.Component{
    constructor(props) {
        super(props)
        this.imageRef = React.createRef()
        this.state = {spans:0}
    }
    componentDidMount() {       
        // console.log(this.imageRef.current.clientHeight)
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 450);
        this.setState({spans})
    }
  
    render() {
        const { title, urlToImage, description,url } = this.props.article;
        return (            
            <a
                className="ui raised cards"
                style={{ gridRowEnd: `span ${this.state.spans}` }}
                href={url}
                target="_blank"
                rel='noreferrer'>
                <div className="card">
                    <div className="image">
                        <img ref={this.imageRef} alt={title} src={urlToImage}>
                        </img>
                    </div>
                    <div className="content">
                        <div className="header">{title}</div>
                        <div class="description">
                { description }
              </div>
                 </div>   
                </div>
                </a>                
        );
    }
}

export default NewsCard