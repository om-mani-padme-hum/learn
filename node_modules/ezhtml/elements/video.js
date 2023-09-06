/**
 * @class ezhtml.Video
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML video elements.
 *
 * @signature new Video([data])
 * @added v0.1.0
 * @param data Object
 * @returns Video
 * @description Returns a new [Video] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature autoplay()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the video should start playing as soon as it is ready.
 *
 * @signature autoplay(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the video should start playing as soon as it is ready.
 *
 * @signature controls()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the video controls should be displayed.
 *
 * @signature controls(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the video controls should be displayed.
 *
 * @signature height()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the height of the video in pixels.
 *
 * @signature height(pixels)
 * @added v0.1.0
 * @updated v0.2.0
 * @param pixels number
 * @returns this
 * @throws TypeError if `pixels` is not a valid [number]
 * @description Sets the height of the video in pixels.
 *
 * @signature loop()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the video should start over again, every time it is finished.
 *
 * @signature loop(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the video should start over again, every time it is finished.
 *
 * @signature muted()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the video output should be muted.
 *
 * @signature muted(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the video output should be muted.
 *
 * @signature poster()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the URL of an image to be shown while the video is downloading, or until the user hits the play button.
 *
 * @signature poster(url)
 * @added v0.1.0
 * @updated v0.2.0
 * @param url string
 * @returns this
 * @throws TypeError if `url` is not a valid [string]
 * @description Sets the URL of an image to be shown while the video is downloading, or until the user hits the play button.
 *
 * @signature preload()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the preferred method for loading the video.
 *
 * @signature preload(method)
 * @added v0.1.0
 * @updated v0.2.0
 * @param method string
 * @returns this
 * @throws TypeError if `method` is not a valid [string]
 * @description Sets the preferred method for loading the video.
 *
 * @signature render(indent) 
 * @added v0.1.0
 * @param indent number
 * @return string Rendered HTML
 * @description Render this element with `indent` spaces of indentation before each line.
 *
 * @signature src()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the URL of the video file.
 *
 * @signature src(url)
 * @added v0.1.0
 * @updated v0.2.0
 * @param url string
 * @returns this
 * @throws TypeError if `url` is not a valid [string]
 * @description Sets the URL of the video file.
 *
 * @signature width()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns number
 * @description Gets the width of the video in pixels.
 *
 * @signature width(pixels)
 * @added v0.1.0
 * @updated v0.2.0
 * @param pixels number
 * @returns this
 * @throws TypeError if `pixels` is not a valid [number]
 * @description Sets the width of the video in pixels.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Video',
  tag: 'video',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'autoplay', type: 'boolean' },
    { name: 'controls', type: 'boolean' },
    { name: 'height', type: 'int' },
    { name: 'loop', type: 'boolean' },
    { name: 'muted', type: 'boolean' },
    { name: 'poster', type: 'string' },
    { name: 'preload', type: 'string' },
    { name: 'src', type: 'string' },
    { name: 'width', type: 'int' }
  ]
};

/** Create the class */
const Video = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Video = Video;
module.exports.config = config;
