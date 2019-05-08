import React, { Component } from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';
import ModalVideo from 'react-modal-video'
import {IoIosPlay}  from 'react-icons/io';
import {transDefault} from '../../utils/styles'
export default class Video extends Component {
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
     
      openModal () {
        this.setState({isOpen: true})
      }
  render() {
      const {video } = this.props;
    return (
      <VideoWrapper>
            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={video.videoId} onClose={() => this.setState({isOpen: false})} />
            <div  onClick={this.openModal} className="content-wrapper">
                <Img fluid={video.thumbnail.fluid} backgroundColor={'rgba(0,0,0,0.6)'} />
                <div className="content">
                    <div className="icon-circle">
                      <IoIosPlay  className="play" color="#fff" />
                    </div>
                    <h3>{video.title}</h3>
                </div>
          </div>
      </VideoWrapper>
    )
  }
}

const VideoWrapper = styled.div`
  cursor: pointer;
  &:hover  .icon-circle{
    background: rgba(255,255,255,0.6)

  }
  .content-wrapper{
    position: relative;
    
  }
  .content{
    position: absolute;
    z-index: 12;
    top: 0;
    left: 0;
    margin: 0 auto;
    display: flex;
    width: 100%;
    height:100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .icon-circle{
    width:70px;
    height:70px;
    border-radius: 50%;
    background: transparent;
    line-height: 85px;
    ${transDefault};
  }
  h3{
    font-weight:300;
    font-style: italic;
    color: #fff;
  }
  .play{
    font-size: 1.5rem;
  }
  .gatsby-image-wrapper:before{
    background: rgba(0,0,0,0.4);
    position: absolute;
    z-index: 1;
    width:100%;
    height:100%;
    left:0;
    top:0;
    display: block;
    content: '';
  }
`;