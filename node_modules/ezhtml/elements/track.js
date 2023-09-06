/**
 * @class ezhtml.Track
 * @extends Element
 * @added v0.1.0
 * @updated v0.2.0
 * @author Rich Lowe
 * @copyright 2018 Rich Lowe
 * @description Class for rendering HTML track elements.
 *
 * @signature new Track([data])
 * @added v0.1.0
 * @param data Object
 * @returns Track
 * @description Returns a new [Track] instance, initializing with any key/value pairs provided in `data` with keys 
 * that match setter method names.
 *
 * @signature default()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns boolean
 * @description Gets a boolean indicating whether the track is to be enabled if the user's preferences do not indicate that another track would be more appropriate.
 *
 * @signature default(flag)
 * @added v0.1.0
 * @updated v0.2.0
 * @param flag boolean
 * @returns this
 * @throws TypeError if `flag` is not a valid [boolean]
 * @description Sets a boolean indicating whether the track is to be enabled if the user's preferences do not indicate that another track would be more appropriate.
 *
 * @signature kind()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the kind of text track, can be `captions`, `chapters`, `descriptions`, `metadata`, or `subtitles`.
 *
 * @signature kind(kind)
 * @added v0.1.0
 * @updated v0.2.0
 * @param kind string
 * @returns this
 * @throws TypeError if `kind` is not a valid [string]
 * @description Sets the kind of text track, can be `captions`, `chapters`, `descriptions`, `metadata`, or `subtitles`.
 *
 * @signature label()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the title of the text track.
 *
 * @signature label(text)
 * @added v0.1.0
 * @updated v0.2.0
 * @param text string
 * @returns this
 * @throws TypeError if `text` is not a valid [string]
 * @description Sets the title of the text track.
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
 * @description Gets the URL of the track file, this attribute is required.
 *
 * @signature src(url)
 * @added v0.1.0
 * @updated v0.2.0
 * @param url string
 * @returns this
 * @throws TypeError if `url` is not a valid [string]
 * @description Sets the URL of the track file, this attribute is required.
 *
 * @signature srclang()
 * @added v0.1.0
 * @updated v0.2.0
 * @returns string
 * @description Gets the language of the track text data.
 *
 * @signature srclang(lang)
 * @added v0.1.0
 * @updated v0.2.0
 * @param lang string
 * @returns this
 * @throws TypeError if `lang` is not a valid [string]
 * @description Sets the language of the track text data.
 */

/** Require local modules */
const element = require('./element');
const ezelement = require('../ezelement');

/** Create the ezelement class configuration */
const config = {
  className: 'Track',
  tag: 'track',
  extends: element.Element,
  extendsConfig: element.config,
  properties: [
    { name: 'default', type: 'boolean' },
    { name: 'kind', type: 'string' },
    { name: 'sizes', type: 'string' },
    { name: 'src', type: 'string' },
    { name: 'srclang', type: 'string' }
  ]
};

/** Create the class */
const Track = ezelement.createClass(config);

/** Export the class and class config */
module.exports.Track = Track;
module.exports.config = config;
