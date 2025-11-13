/*
* <license header>
*/

/**
 * This is a sample action showcasing how to access an external API
 *
 * Note:
 * You might want to disable authentication and authorization checks against Adobe Identity Management System for a generic action. In that case:
 *   - Remove the require-adobe-auth annotation for this action in the manifest.yml of your application
 *   - Remove the Authorization header from the array passed in checkMissingRequestInputs
 *   - The two steps above imply that every client knowing the URL to this deployed action will be able to invoke it without any authentication and authorization checks against Adobe Identity Management System
 *   - Make sure to validate these changes against your security requirements before deploying the action
 */


  // const fetch = require('node-fetch')
  // const { Core } = require('@adobe/aio-sdk')
  // const { errorResponse, getBearerToken, stringParameters, checkMissingRequestInputs } = require('../utils')

  // // main function that will be executed by Adobe I/O Runtime
  // async function main (params) {
  //   // create a Logger
  //   const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })

  //   try {
  //     // 'info' is the default level if not set
  //     logger.info('Calling the main action')

  //     // log parameters, only if params.LOG_LEVEL === 'debug'
  //     logger.debug(stringParameters(params))

  //     // check for missing request input parameters and headers
  //     const requiredParams = [/* add required params */]
  //     const requiredHeaders = ['Authorization']
  //     const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)
  //     if (errorMessage) {
  //       // return and log client errors
  //       return errorResponse(400, errorMessage, logger)
  //     }

  //     // extract the user Bearer token from the Authorization header
  //     const token = getBearerToken(params)

  //     // replace this with the api you want to access
  //     const apiEndpoint = 'https://adobeioruntime.net/api/v1'

  //     // fetch content from external api endpoint
  //     const res = await fetch(apiEndpoint)
  //     if (!res.ok) {
  //       throw new Error('request to ' + apiEndpoint + ' failed with status code ' + res.status)
  //     }
  //     const content = await res.json()
  //     const response = {
  //       statusCode: 200,
  //       body: content
  //     }

  //     // log the response status code
  //     logger.info(`${response.statusCode}: successful request`)
  //     return response
  //   } catch (error) {
  //     // log any server errors
  //     logger.error(error)
  //     // return with 500
  //     return errorResponse(500, 'server error', logger)
  //   }
  // }

  // exports.main = main
// 'use strict';

// const Jimp = require('jimp');
// const { worker, SourceCorruptError, ClientError } = require('@adobe/asset-compute-sdk');
// const fs = require('fs').promises;

// exports.main = worker(async (source, rendition, params) => {
//     // Check source file is not empty
//     const stats = await fs.stat(source.path);
//     if (stats.size === 0) {
//         throw new SourceCorruptError('source file is empty');
//     }

//     // Parse "instructions" - use default if not present
//     const instructions = rendition.instructions || {};
//     const SIZE = parseInt(instructions.size) || 300;
//     const WATERMARK_TEXT = instructions.watermarkText || "Adobe Demo";

//     // Read your source image
//     let image = await Jimp.read(source.path);

//     // Resize/crop image to square and scale
//     image.cover(SIZE, SIZE);

//     // Prepare watermark overlay
//     const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
//     image.print(font, 10, SIZE - 50, WATERMARK_TEXT);

//     // Write PNG output to rendition path
//     await image.writeAsync(rendition.path);
// });


/*
* <license header>
*/
// 'use strict';

// const Jimp = require('jimp');
// const { worker, SourceCorruptError } = require('@adobe/asset-compute-sdk');
// const fs = require('fs').promises;

// exports.main = worker(async (source, rendition, params) => {
//     // Log for debugging
//     console.log('Worker called with:', JSON.stringify({source, rendition, params}, null, 2));
//     if (!source || !source.path) {
//         throw new SourceCorruptError('Missing source.path');
//     }
//     const stats = await fs.stat(source.path);
//     if (stats.size === 0) {
//         throw new SourceCorruptError('Source file is empty');
//     }
//     const instructions = (rendition && rendition.instructions) ? rendition.instructions : {};
//     const SIZE = parseInt(instructions.size) || 300;
//     const WATERMARK_TEXT = instructions.watermarkText || "Adobe Demo";
//     let image = await Jimp.read(source.path);
//     image.cover(SIZE, SIZE);
//     const font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
//     image.print(font, 10, SIZE - 50, WATERMARK_TEXT);
//     await image.writeAsync(rendition.path);
//     console.log('Processing done, wrote to', rendition.path);
// });

/*
* <license header>
*/



// 'use strict';

// // Import the Asset Compute SDK starter, even if we're not doing real processing yet
// const { worker } = require('@adobe/asset-compute-sdk');

// // Export the main worker. It just logs and returns a JSON success message.
// exports.main = worker(async (source, rendition, params) => {
//     // Log the input to help with debugging in activation logs
//     console.log('Asset Compute Worker called!');
//     console.log('source:', JSON.stringify(source));
//     console.log('rendition:', JSON.stringify(rendition));
//     console.log('params:', JSON.stringify(params));

//     // Write a dummy file (very small)
//     const fs = require('fs');
//     const content = Buffer.from('Asset Compute Worker processed successfully!\n');
//     fs.writeFileSync(rendition.path, content);

//     // The framework will handle the response and setting up activationId, etc.
// });





//working
// const fetch = require('node-fetch')
// const { Core } = require('@adobe/aio-sdk')
// const { errorResponse, getBearerToken, stringParameters, checkMissingRequestInputs } = require('../utils')

// // main function that will be executed by Adobe I/O Runtime
// async function main (params) {
//   // create a Logger
//   const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })
//   console.log('🎉 Custom Asset Compute Worker invoked!');

//   try {
//     // 'info' is the default level if not set
//     logger.info('Calling the main action')

//     // log parameters, only if params.LOG_LEVEL === 'debug'
//     logger.debug(stringParameters(params))

//     // check for missing request input parameters and headers
//     const requiredParams = [/* add required params */]
//     const requiredHeaders = ['Authorization']
//     const errorMessage = checkMissingRequestInputs(params, requiredParams, requiredHeaders)
//     if (errorMessage) {
//       // return and log client errors
//       return errorResponse(400, errorMessage, logger)
//     }

//     // extract the user Bearer token from the Authorization header
//     const token = getBearerToken(params)

//     // replace this with the api you want to access
//     const apiEndpoint = 'https://adobeioruntime.net/api/v1'

//     // fetch content from external api endpoint
//     const res = await fetch(apiEndpoint)
//     if (!res.ok) {
//       throw new Error('request to ' + apiEndpoint + ' failed with status code ' + res.status)
//     }
//     const content = await res.json()
//     const response = {
//       statusCode: 200,
//       body: content
//     }

//     // log the response status code
//     logger.info(`${response.statusCode}: successful request`)
//     return response
//   } catch (error) {
//     // log any server errors
//     logger.error(error)
//     // return with 500
//     return errorResponse(500, 'server error', logger)
//   }
// }

// exports.main = main


// 'use strict';
// const fetch = require('node-fetch');
// const { Core, errorResponse } = require('@adobe/aio-sdk');

// const fs = require('fs');

// exports.main = async params => {
//     // Entry marker
//     console.log('🎉 Worker invoked: Basic test + API call');

//     // Log params
//     console.log('params:', JSON.stringify(params, null, 2));

//     // If source/rendition for asset processing (basic worker)
//     let source = params.source;
//     let rendition = params.rendition;

//     // Write a dummy file (proves Asset Compute writes output)
//     if (rendition && rendition.path) {
//         try {
//             fs.writeFileSync(rendition.path, Buffer.from('hello world\n'));
//             console.log('✅ SUCCESS: Dummy rendition written:', rendition.path);
//         } catch (e) {
//             console.error('🔥 ERROR writing dummy file:', e);
//             // Optionally return error:
//             return errorResponse(500, 'Could not write dummy rendition', console);
//         }
//     } else {
//         console.warn('⚠️  Warning: No rendition.path provided, skipping file write.');
//     }

//     // Proceed with your original proxy logic as well (for demo)
//     const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' });
//     logger.info('Calling external API test');

//     try {
//         const apiEndpoint = 'https://adobeioruntime.net/api/v1';
//         const res = await fetch(apiEndpoint);
//         if (!res.ok) {
//             console.error('🔥 ERROR: API fetch failed, status:', res.status);
//             throw new Error('request to ' + apiEndpoint + ' failed with status code ' + res.status);
//         }
//         const content = await res.json();
//         logger.info('200: successful request');
//         console.log('✅ SUCCESS: Worker finished');
//         return {
//             statusCode: 200,
//             body: {
//                 text: 'Asset Compute dummy worker ran successfully!',
//                 apiResponse: content
//             }
//         };
//     } catch (error) {
//         logger.error(error);
//         console.error('🔥 ERROR: Worker caught exception:', error);
//         return {
//             statusCode: 500,
//             body: { error: 'server error' }
//         };
//     }
// };


// working code
// 'use strict';

// const { worker, SourceCorruptError } = require('@adobe/asset-compute-sdk');
// const fs = require('fs').promises;

// // The minimal worker simply copies the input file to the output path (rendition)
// exports.main = worker(async (source, rendition, params) => {
//     // Check if source file is available and non-empty
//     const stats = await fs.stat(source.path);
//     if (stats.size === 0) {
//         throw new SourceCorruptError('Source file is empty');
//     }

//     // Copy file from source.path to rendition.path
//     await fs.copyFile(source.path, rendition.path);

//     console.log(`✅ Copied ${source.path} to ${rendition.path}`);
// });

'use strict';
const Jimp = require('jimp');
const { worker, SourceCorruptError } = require('@adobe/asset-compute-sdk');
const fs = require('fs').promises;

exports.main = worker(async (source, rendition, params) => {
    // Defensive: file must exist and not be empty
    const stats = await fs.stat(source.path);
    if (stats.size === 0) {
        throw new SourceCorruptError('Source file is empty');
    }

    // Read and process image
    let image;
    try {
        image = await Jimp.read(source.path);
    } catch (e) {
        console.error('Jimp failed to read file:', e);
        throw new Error('Jimp failed to read file: ' + e.message);
    }

const SIZE = parseInt(rendition.instructions && rendition.instructions.size) || 200;
image.resize(SIZE, SIZE);

    try {
        await image.writeAsync(rendition.path);
        console.log(`✅ Jimp: 200x200 rendition written to ${rendition.path}`);
    } catch (e) {
        console.error('Jimp failed to write output:', e.message);
        throw new Error('Jimp failed to write output: ' + e.message);
    }
});