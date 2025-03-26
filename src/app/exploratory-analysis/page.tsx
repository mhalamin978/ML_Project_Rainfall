'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ExploratoryAnalysis() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Exploratory Data Analysis</h1>
          <p className="mt-2 text-blue-100">Understanding the Rainfall Dataset</p>
        </div>
      </header>

      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Dataset Overview</h2>
            <p className="text-gray-700 mb-4">
              The dataset contains weather metrics for predicting rainfall, with 2,190 training samples and 730 test samples.
              Each sample represents a day with various weather measurements, and the target variable indicates whether rainfall occurred (1) or not (0).
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Target Distribution</h3>
                <p className="text-gray-700 mb-4">
                  The target variable is imbalanced with 75.34% of days having rainfall (1) and 24.66% having no rainfall (0).
                </p>
                <div className="flex justify-center">
                  <Image 
                    src="/images/target_distribution.png" 
                    alt="Distribution of Rainfall (Target Variable)" 
                    width={400} 
                    height={240}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Seasonal Patterns</h3>
                <p className="text-gray-700 mb-4">
                  The 'day' feature represents the day of year (1-365), allowing us to analyze seasonal rainfall patterns.
                </p>
                <div className="flex justify-center">
                  <Image 
                    src="/images/seasonal_pattern.png" 
                    alt="Seasonal Rainfall Patterns" 
                    width={400} 
                    height={240}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Feature Distributions</h2>
            <p className="text-gray-700 mb-4">
              Understanding the distribution of each feature helps identify patterns and potential preprocessing needs.
            </p>
            <div className="flex justify-center my-6">
              <Image 
                src="/images/feature_distributions.png" 
                alt="Feature Distributions" 
                width={700} 
                height={525}
                className="rounded-lg shadow-md"
              />
            </div>
            <p className="text-gray-700">
              Most features show relatively normal distributions, with some exceptions like sunshine which appears bimodal,
              suggesting days are either mostly sunny or mostly cloudy.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Feature Relationships with Target</h2>
            <p className="text-gray-700 mb-4">
              Boxplots help visualize how each feature's distribution differs between rainfall and non-rainfall days.
            </p>
            <div className="flex justify-center my-6">
              <Image 
                src="/images/feature_vs_target.png" 
                alt="Feature Relationships with Target" 
                width={700} 
                height={525}
                className="rounded-lg shadow-md"
              />
            </div>
            <p className="text-gray-700">
              Notable differences can be observed in cloud cover, humidity, and sunshine between rainfall and non-rainfall days.
              Days with rainfall tend to have higher cloud cover and humidity, and lower sunshine.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Correlation Analysis</h2>
            <p className="text-gray-700 mb-4">
              The correlation matrix reveals relationships between features and the target variable.
            </p>
            <div className="flex justify-center my-6">
              <Image 
                src="/images/correlation_matrix.png" 
                alt="Correlation Matrix" 
                width={600} 
                height={500}
                className="rounded-lg shadow-md"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Key Correlations with Rainfall:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Positive correlations:</strong> Cloud cover (0.64), humidity (0.45), windspeed (0.11)</li>
              <li><strong>Negative correlations:</strong> Sunshine (-0.56), maxtemp (-0.08), pressure (-0.05)</li>
              <li><strong>Minimal correlation:</strong> Day of year (-0.0005), suggesting rainfall doesn't have a strong seasonal pattern overall</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Feature Pair Relationships</h2>
            <p className="text-gray-700 mb-4">
              Pair plots of the top 5 features by correlation with rainfall help visualize multivariate relationships.
            </p>
            <div className="flex justify-center my-6">
              <Image 
                src="/images/top_features_pairplot.png" 
                alt="Feature Pair Relationships" 
                width={700} 
                height={560}
                className="rounded-lg shadow-md"
              />
            </div>
            <p className="text-gray-700">
              The pair plots reveal interesting patterns, such as the clear separation between rainfall and non-rainfall days
              in the cloud cover vs. sunshine plot, suggesting these features together have strong predictive power.
            </p>
          </div>
        </section>

        <div className="flex justify-between mt-8">
          <Link href="/" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
            ← Home
          </Link>
          <Link href="/feature-engineering" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Feature Engineering →
          </Link>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
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
