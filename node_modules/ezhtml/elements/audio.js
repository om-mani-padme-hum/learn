/**
 * @class ezhtml.Audio
 * @extends ContainerElement
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML audio elements.
 *
 * @signature new Audio([data])
 * @added v0.1.0
 * @param data Object
 * @returns Audio
 * @description Returns a new [Audio] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature autoplay()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the audio should start playing as soon as it is ready.
 *
 * @signature autoplay(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the audio should start playing as soon as it is ready.
 *
 * @signature controls()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the audio controls should be displayed.
 *
 * @signature controls(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the audio controls should be displayed.
 *
 * @signature loop()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the audio should start over again, every time it is finished.
 *
 * @signature loop(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the audio should start over again, every time it is finished.
 *
 * @signature muted()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the audio output should be muted.
 *
 * @signature muted(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the audio output should be muted.
 *
 * @signature preload()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the preferred method for loading the audio.
 *
 * @signature preload(method)
 * @added v0.1.0
 * @updated v0.2.0
 * @param method string
 * @returns this
 * @throws TypeError if `method` is not a valid [string]
 * @description Sets the preferred method for loading the audio.
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
 * @description Gets the URL of the audio file.
 *
 * @signature src(url)
 * @added v0.1.0
 * @updated v0.2.0
 * @param url string
 * @returns this
 * @throws TypeError if `url` is not a valid [string]
 * @description Sets the URL of the audio file.
 */

/** Require local modules */
const containerElement = require('./container-element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Audio',
  tag: 'audio',
  extends: containerElement.ContainerElement,
  extendsConfig: containerElement.config,
  properties: [
    { name: 'autoplay', type: 'boolean' },
    { name: 'controls', type: 'boolean' },
    { name: 'loop', type: 'boolean' },
    { name: 'muted', type: 'boolean' },
    { name: 'preload', type: 'string' },
    { name: 'src', type: 'string' }
  ]
};

/** Create the class */
const Audio = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Audio = Audio;
module.exports.config = config;
