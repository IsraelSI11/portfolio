/* eslint-disable */
/** @type {((tag: AvailableLanguageTag) => void) | undefined} */ 

/**
 * The project's source language tag.
 * 
 * @example
 *   if (newlySelectedLanguageTag === sourceLanguageTag){
 *     // do nothing as the source language tag is the default language
 *     return
 *   }
 */
const sourceLanguageTag = "en";

/**
 * The project's available language tags.
 * 
 * @example 
 *   if (availableLanguageTags.includes(userSelectedLanguageTag) === false){
 *     throw new Error("Language tag not available")
 *   }
 */
const availableLanguageTags = /** @type {const} */ (["en","es"]);

/**
 * Get the current language tag.
 * 
 * @example
 *   if (languageTag() === "de"){
 *     console.log("Germany 🇩🇪")
 *   } else if (languageTag() === "nl"){
 *     console.log("Netherlands 🇳🇱")
 *   }
 * 
 * @type {() => AvailableLanguageTag}
 */
let languageTag = () => sourceLanguageTag;

/**
 * Set the language tag.
 * 
 * @example 
 * 
 *   // changing to language 
 *   setLanguageTag("en")
 * 
 *   // passing a getter function also works. 
 *   // 
 *   // a getter function is useful for resolving a language tag 
 *   // on the server where every request has a different language tag
 *   setLanguageTag(() => {
 *     return request.langaugeTag
 *   }) 
 *
 * @param {AvailableLanguageTag | (() => AvailableLanguageTag)} tag
 */
const setLanguageTag = (tag) => {
    if (typeof tag === "function") {
        languageTag = enforceLanguageTag(tag);
    } else {
        languageTag = enforceLanguageTag(() => tag);
    }
};

/**
 * Wraps an untrusted function and enforces that it returns a language tag.
 * @param {() => AvailableLanguageTag} unsafeLanguageTag
 * @returns {() => AvailableLanguageTag}
 */
function enforceLanguageTag(unsafeLanguageTag) {
    return () => {
        const tag = unsafeLanguageTag();
        if(!isAvailableLanguageTag(tag)) {
            throw new Error(`languageTag() didn't return a valid language tag. Check your setLanguageTag call`)
        }
        return tag
    }
}

/**
 * Check if something is an available language tag.
 * 
 * @example
 * 	if (isAvailableLanguageTag(params.locale)) {
 * 		setLanguageTag(params.locale)
 * 	} else {
 * 		setLanguageTag("en")
 * 	}
 * 
 * @param {any} thing
 * @returns {thing is AvailableLanguageTag}
 */
function isAvailableLanguageTag(thing) {
    return availableLanguageTags.includes(thing)
}

// ------ TYPES ------

/**
 * A language tag that is available in the project.
 * 
 * @example
 *   setLanguageTag(request.languageTag as AvailableLanguageTag)
 * 
 * @typedef {typeof availableLanguageTags[number]} AvailableLanguageTag
 */

export { setLanguageTag as a, isAvailableLanguageTag as i, languageTag as l, sourceLanguageTag as s };
