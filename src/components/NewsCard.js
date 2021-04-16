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
        const spans = Math.ceil(height / 10);
        this.setState({spans})
    }
  
    render() {
        const { title, urlToImage } = this.props.article;
        return <div style={{gridRowEnd:`span ${this.state.spans}`}}>
            <img ref={this.imageRef} alt={title} src={urlToImage}>                
            </img>
         </div>
    }
}

export default NewsCard