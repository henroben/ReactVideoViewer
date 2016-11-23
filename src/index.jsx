import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
var {Grid, Row, Col} = require('react-bootstrap');

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyABHytFzU_YOan5u0_L_Lizbz0iZC2tpxE';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('cats');
    }
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col md={1} xsHidden></Col>
                        <Col md={10}>
                            <h1 className="page-title">Video Search</h1>
                            <SearchBar onSearchTermChanged={term => this.videoSearch(term)} />
                            <VideoDetail video={this.state.selectedVideo} />
                            <VideoList
                                onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
                                videos={this.state.videos} />
                        </Col>
                        <Col md={1} xsHidden>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));