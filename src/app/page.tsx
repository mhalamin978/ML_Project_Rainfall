'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Kaggle Rainfall Prediction Analysis</h1>
          <p className="mt-2 text-blue-100">Playground Series - Season 5, Episode 3</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
            <p className="text-gray-700 mb-4">
              This website showcases the analysis and results of the Kaggle competition "Binary Prediction with a Rainfall Dataset" 
              from the Playground Series - Season 5, Episode 3. The goal was to predict rainfall for each day of the year using 
              weather-related features, with performance evaluated using the area under the ROC curve (AUC).
            </p>
            <div className="flex justify-center my-6">
              <Image 
                src="/images/target_distribution.png" 
                alt="Distribution of Rainfall (Target Variable)" 
                width={600} 
                height={360}
                className="rounded-lg shadow-md"
              />
            </div>
            <p className="text-gray-700">
              The dataset contains weather metrics like pressure, temperature, humidity, cloud cover, and wind measurements. 
              The target variable is binary, with 75.34% of days having rainfall (1) and 24.66% having no rainfall (0).
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link href="/exploratory-analysis" className="block">
            <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Exploratory Data Analysis</h2>
              <p className="text-gray-700 mb-4">
                Discover the patterns and relationships in the weather data through visualizations and statistical analysis.
              </p>
              <div className="flex justify-center">
                <Image 
                  src="/images/correlation_matrix.png" 
                  alt="Correlation Matrix" 
                  width={300} 
                  height={250}
                  className="rounded-lg"
                />
              </div>
            </div>
          </Link>

          <Link href="/feature-engineering" className="block">
            <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Feature Engineering</h2>
              <p className="text-gray-700 mb-4">
                Learn about the new features created to improve model performance, including temperature range, seasonal transformations, and interaction terms.
              </p>
              <div className="flex justify-center">
                <Image 
                  src="/images/feature_coefficients.png" 
                  alt="Feature Coefficients" 
                  width={300} 
                  height={250}
                  className="rounded-lg"
                />
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link href="/model-development" className="block">
            <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Model Development</h2>
              <p className="text-gray-700 mb-4">
                Explore the different machine learning models trained and their performance metrics.
              </p>
              <div className="flex justify-center">
                <Image 
                  src="/images/model_comparison.png" 
                  alt="Model Comparison" 
                  width={300} 
                  height={250}
                  className="rounded-lg"
                />
              </div>
            </div>
          </Link>

          <Link href="/results" className="block">
            <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Final Results</h2>
              <p className="text-gray-700 mb-4">
                See the final model performance, key findings, and submission results.
              </p>
              <div className="flex justify-center">
                <Image 
                  src="/images/roc_curve_logistic_regression.png" 
                  alt="ROC Curve" 
                  width={300} 
                  height={250}
                  className="rounded-lg"
                />
              </div>
            </div>
          </Link>
        </div>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Findings</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Cloud cover (coefficient: 1.456) and humidity (coefficient: 0.435) are strongly associated with rainfall</li>
              <li>Sunshine has a strong negative correlation with rainfall (coefficient: -0.555)</li>
              <li>The best performing model was Logistic Regression with a validation AUC of 0.8797</li>
              <li>Optimal parameters: C=10, penalty='l2', solver='sag'</li>
              <li>Feature engineering, particularly interaction terms, significantly improved model performance</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <p className="text-center">
            Kaggle Rainfall Prediction Analysis | Created for the Playground Series - Season 5, Episode 3
          </p>
          <p className="text-center text-gray-400 mt-2">
            © 2025 | All visualizations and analysis created using Python
          </p>
        </div>
      </footer>
    </div>
  );
}
