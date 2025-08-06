# Gulp Image Minifier

A simple and efficient image optimization tool built with Gulp.js that compresses PNG and JPEG images while maintaining quality.

## 🚀 Features

- **Image Compression**: Optimizes PNG and JPEG images using industry-standard algorithms
- **Quality Control**: Maintains 85% quality for JPEG images with progressive encoding
- **PNG Optimization**: Uses OptiPNG with level 5 optimization
- **Batch Processing**: Process entire directories of images at once
- **Debug Output**: Real-time feedback on processing status
- **WebP Support**: Optional WebP conversion (currently commented out)
- **Image Resizing**: Optional image resizing capabilities (currently commented out)

## 🛠️ Technologies Used

- **[Gulp.js](https://gulpjs.com/)** - Task automation and build system
- **[gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)** - Image optimization plugin
- **[imagemin-optipng](https://github.com/imagemin/imagemin-optipng)** - PNG optimization
- **[imagemin-mozjpeg](https://github.com/imagemin/imagemin-mozjpeg)** - JPEG optimization
- **[gulp-debug](https://github.com/sindresorhus/gulp-debug)** - Debug information output
- **[gulp-webp](https://github.com/sindresorhus/gulp-webp)** - WebP conversion (optional)
- **[gulp-image-resize](https://github.com/scalableminds/gulp-image-resize)** - Image resizing (optional)

## 📋 Prerequisites

- Node.js (version 12 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/sercanbayrambey/gulp-imageminifier.git
cd gulp-imageminifier
```

2. Install dependencies:
```bash
npm install
```

## 📁 Usage

1. Place your images in the `images/` directory (supports subdirectories)

2. Run the image optimization task:
```bash
gulp imagemin
```

3. Optimized images will be saved in the `result/` directory

### Supported Image Formats
- **PNG** - Optimized using OptiPNG
- **JPEG/JPG** - Optimized using MozJPEG with 85% quality

## ⚙️ Configuration

You can customize the optimization settings in `gulpfile.js`:

- **JPEG Quality**: Modify the `quality` value (default: 85)
- **PNG Optimization Level**: Change `optimizationLevel` (1-7, default: 5)
- **Enable WebP**: Uncomment the `.pipe(webp())` line
- **Enable Resizing**: Uncomment the image resize section and configure dimensions

## 📊 Optimization Results

The tool provides detailed output showing:
- Files being processed
- Compression results
- Final output location

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Sercan Bayrambey**

---

*Simple, fast, and effective image optimization for your projects.*
