'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Results() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Final Results</h1>
          <p className="mt-2 text-blue-100">Kaggle Rainfall Prediction Competition Submission</p>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Final Model Selection</h2>
            <p className="text-gray-700 mb-4">
              After evaluating multiple models and optimization techniques, we selected the tuned Logistic Regression model
              for our final submission. This model achieved the highest validation AUC of 0.8797.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Best Model:</strong> Tuned Logistic Regression with AUC = 0.8797
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Model Comparison Summary:</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Model</th>
                    <th className="py-2 px-4 border-b text-left">Validation AUC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50">
                    <td className="py-2 px-4 border-b font-medium">Tuned Logistic Regression</td>
                    <td className="py-2 px-4 border-b font-medium">0.8797</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Baseline Logistic Regression</td>
                    <td className="py-2 px-4 border-b">0.8796</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Random Forest</td>
                    <td className="py-2 px-4 border-b">0.8749</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Stacked Model</td>
                    <td className="py-2 px-4 border-b">0.8751</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Gradient Boosting</td>
                    <td className="py-2 px-4 border-b">0.8702</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">LightGBM</td>
                    <td className="py-2 px-4 border-b">0.8612</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">XGBoost</td>
                    <td className="py-2 px-4 border-b">0.8522</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Findings</h2>
            <p className="text-gray-700 mb-4">
              Our analysis revealed several important insights about rainfall prediction:
            </p>
            
            <div className="space-y-4 mt-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">1. Most Predictive Features</h3>
                <p className="text-gray-700">
                  Cloud cover, humidity-temperature interaction, and cloud-sunshine interaction were the most important predictors.
                  This aligns with meteorological understanding that cloudy, humid conditions are associated with rainfall.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">2. Feature Engineering Impact</h3>
                <p className="text-gray-700">
                  Several engineered features ranked among the top predictors, demonstrating the value of domain knowledge in feature creation.
                  Particularly, interaction terms like humidity_temp and cloud_sunshine captured important relationships.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">3. Model Simplicity</h3>
                <p className="text-gray-700">
                  The simpler Logistic Regression model outperformed more complex tree-based models, suggesting that
                  with good feature engineering, linear models can be highly effective for this problem.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">4. Seasonal Patterns</h3>
                <p className="text-gray-700">
                  While the day of year itself had minimal correlation with rainfall, our cyclic transformations (day_sin, day_cos)
                  helped capture seasonal patterns that might exist in certain regions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Submission Results</h2>
            <p className="text-gray-700 mb-4">
              We generated predictions for the test set using our tuned Logistic Regression model and created a submission file
              in the required format for the Kaggle competition.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Sample Predictions:</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">ID</th>
                    <th className="py-2 px-4 border-b text-left">Rainfall Probability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">2190</td>
                    <td className="py-2 px-4 border-b">0.983313</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">2191</td>
                    <td className="py-2 px-4 border-b">0.984219</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">2192</td>
                    <td className="py-2 px-4 border-b">0.926941</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">2193</td>
                    <td className="py-2 px-4 border-b">0.102691</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">2194</td>
                    <td className="py-2 px-4 border-b">0.056437</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-700 mt-4">
              The predictions show a good range of probabilities, with some days having very high likelihood of rainfall (greater than 0.98)
              and others having very low likelihood (less than 0.06). This suggests the model is making meaningful distinctions between different weather conditions.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Future Improvements</h2>
            <p className="text-gray-700 mb-4">
              While our model achieved strong performance, there are several potential areas for improvement:
            </p>
            
            <div className="space-y-4 mt-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">Additional Feature Engineering</h3>
                <p className="text-gray-700">
                  Creating more meteorological indices and domain-specific features could further improve performance.
                  For example, incorporating relative humidity, vapor pressure deficit, or stability indices.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">Advanced Models</h3>
                <p className="text-gray-700">
                  Exploring neural network architectures or more sophisticated ensemble techniques might capture additional patterns.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">Threshold Optimization</h3>
                <p className="text-gray-700">
                  For practical applications, optimizing the probability threshold based on the specific cost of false positives vs. false negatives
                  could improve the usefulness of the predictions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-between mt-8">
          <Link href="/model-development" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
            ← Model Development
          </Link>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Home
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
