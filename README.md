# Kaggle Rainfall Prediction Website

This package contains the HTML, CSS, and React/Next.js code for the Kaggle Rainfall Prediction Analysis website. The website showcases the analysis and results of the Kaggle competition "Binary Prediction with a Rainfall Dataset" from the Playground Series - Season 5, Episode 3.

## Directory Structure

```
kaggle_rainfall_website_package/
├── public/
│   └── images/         # Contains all visualization images
├── src/
│   └── app/
│       ├── exploratory-analysis/  # Exploratory Data Analysis page
│       ├── feature-engineering/   # Feature Engineering page
│       ├── model-development/     # Model Development page
│       ├── results/               # Final Results page
│       ├── globals.css            # Global CSS styles (Tailwind CSS)
│       ├── layout.tsx             # Root layout component
│       └── page.tsx               # Home page component
└── README.md                      # This file
```

## Pages

1. **Home Page** (`src/app/page.tsx`): Overview of the project and key findings
2. **Exploratory Analysis** (`src/app/exploratory-analysis/page.tsx`): Detailed analysis of the dataset with visualizations
3. **Feature Engineering** (`src/app/feature-engineering/page.tsx`): Explanation of the features created to improve model performance
4. **Model Development** (`src/app/model-development/page.tsx`): Comparison of different machine learning models and their performance
5. **Results** (`src/app/results/page.js`): Final model selection, performance metrics, and submission details

## Technologies Used

- **Next.js**: React framework for building the website
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React**: JavaScript library for building user interfaces

## How to Use This Code

### Prerequisites

- Node.js (v14 or later)
- npm or yarn package manager

### Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   # or
   yarn build
   ```

4. **Start production server**:
   ```bash
   npm run start
   # or
   yarn start
   ```

## Customization

You can customize this website by:

1. Modifying the content in the page components
2. Updating the images in the `public/images` directory
3. Adjusting the styles in `globals.css` or inline Tailwind classes

## Notes

- This website was built using Next.js and Tailwind CSS
- The website is responsive and works on mobile and desktop devices
- All visualizations were created using Python libraries (matplotlib, seaborn)
