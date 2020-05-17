import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import { TalksPagePreview } from './preview-templates/TalksPagePreview'
import { ArticlesPagePreview } from './preview-templates/ArticlesPagePreview'
import { IndexPagePreview } from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('talks', TalksPagePreview)
CMS.registerPreviewTemplate('articles', ArticlesPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
