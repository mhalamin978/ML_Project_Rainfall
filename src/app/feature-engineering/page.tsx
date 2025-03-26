'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function FeatureEngineering() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Feature Engineering</h1>
          <p className="mt-2 text-blue-100">Creating Predictive Features for Rainfall Prediction</p>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Feature Engineering Approach</h2>
            <p className="text-gray-700 mb-4">
              Feature engineering is crucial for improving model performance. We created several new features based on domain knowledge 
              about weather patterns and rainfall prediction. These engineered features capture complex relationships and interactions 
              that the original features might not express directly.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Created Features:</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Feature Name</th>
                    <th className="py-2 px-4 border-b text-left">Description</th>
                    <th className="py-2 px-4 border-b text-left">Formula</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">temp_range</td>
                    <td className="py-2 px-4 border-b">Temperature range (difference between max and min)</td>
                    <td className="py-2 px-4 border-b">maxtemp - mintemp</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">temp_deviation</td>
                    <td className="py-2 px-4 border-b">Temperature deviation from average</td>
                    <td className="py-2 px-4 border-b">temperature - ((maxtemp + mintemp) / 2)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">dewpoint_depression</td>
                    <td className="py-2 px-4 border-b">Difference between temperature and dew point</td>
                    <td className="py-2 px-4 border-b">temperature - dewpoint</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">day_sin, day_cos</td>
                    <td className="py-2 px-4 border-b">Cyclic transformation of day of year</td>
                    <td className="py-2 px-4 border-b">sin(2π × day/365), cos(2π × day/365)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">wind_chill</td>
                    <td className="py-2 px-4 border-b">Wind chill factor (simplified formula)</td>
                    <td className="py-2 px-4 border-b">13.12 + 0.6215 × temp - 11.37 × windspeed^0.16 + 0.3965 × temp × windspeed^0.16</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">humidity_temp</td>
                    <td className="py-2 px-4 border-b">Interaction between humidity and temperature</td>
                    <td className="py-2 px-4 border-b">humidity × temperature</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">cloud_sunshine</td>
                    <td className="py-2 px-4 border-b">Interaction between cloud cover and sunshine</td>
                    <td className="py-2 px-4 border-b">cloud × sunshine</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">wind_dir_sin, wind_dir_cos</td>
                    <td className="py-2 px-4 border-b">Cyclic transformation of wind direction</td>
                    <td className="py-2 px-4 border-b">sin(2π × winddirection/360), cos(2π × winddirection/360)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Feature Importance</h2>
            <p className="text-gray-700 mb-4">
              After training our models, we analyzed which features contributed most to the predictions. 
              The Logistic Regression model provided coefficients that indicate the importance and direction of each feature's influence.
            </p>
            <div className="flex justify-center my-6">
              <Image 
                src="/images/feature_coefficients.png" 
                alt="Feature Coefficients" 
                width={600} 
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Top 5 Most Important Features:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Cloud cover</strong> (coefficient: 1.456) - Strong positive influence on rainfall prediction</li>
              <li><strong>Humidity-temperature interaction</strong> (coefficient: 0.435) - Positive influence, showing the combined effect is important</li>
              <li><strong>Cloud-sunshine interaction</strong> (coefficient: -0.425) - Negative influence, capturing the relationship between these opposing factors</li>
              <li><strong>Dewpoint depression</strong> (coefficient: -0.297) - Negative influence, smaller differences between temperature and dewpoint increase rainfall probability</li>
              <li><strong>Pressure</strong> (coefficient: -0.205) - Negative influence, lower pressure systems are associated with rainfall</li>
            </ul>
            
            <p className="text-gray-700 mt-4">
              Notably, several of our engineered features (humidity_temp, cloud_sunshine, dewpoint_depression) ranked among the most important predictors,
              validating our feature engineering approach.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Preprocessing</h2>
            <p className="text-gray-700 mb-4">
              In addition to feature engineering, we applied several preprocessing steps to prepare the data for modeling:
            </p>
            
            <div className="space-y-4 mt-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">Missing Value Handling</h3>
                <p className="text-gray-700">
                  We identified 3 missing values in the test set after feature engineering and handled them using mean imputation.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">Feature Scaling</h3>
                <p className="text-gray-700">
                  We applied StandardScaler to normalize all features, ensuring they have mean=0 and standard deviation=1.
                  This is particularly important for models like Logistic Regression that are sensitive to feature scales.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">Train-Validation Split</h3>
                <p className="text-gray-700">
                  We split the training data into 80% training and 20% validation sets, stratified by the target variable
                  to maintain the same class distribution in both sets.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-between mt-8">
          <Link href="/exploratory-analysis" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
            ← Exploratory Analysis
          </Link>
          <Link href="/model-development" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Model Development →
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
