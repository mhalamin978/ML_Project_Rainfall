'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ModelDevelopment() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Model Development</h1>
          <p className="mt-2 text-blue-100">Building and Optimizing Machine Learning Models</p>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Baseline Models</h2>
            <p className="text-gray-700 mb-4">
              We trained five different machine learning models to predict rainfall and compared their performance.
              Each model was evaluated using the area under the ROC curve (AUC), which is particularly suitable for
              imbalanced binary classification problems.
            </p>
            
            <div className="flex justify-center my-6">
              <Image 
                src="/images/model_comparison.png" 
                alt="Model Comparison" 
                width={600} 
                height={360}
                className="rounded-lg shadow-md"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Model Performance:</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Model</th>
                    <th className="py-2 px-4 border-b text-left">Validation AUC</th>
                    <th className="py-2 px-4 border-b text-left">Cross-validation AUC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Logistic Regression</td>
                    <td className="py-2 px-4 border-b">0.8796</td>
                    <td className="py-2 px-4 border-b">0.8939 ± 0.0200</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Random Forest</td>
                    <td className="py-2 px-4 border-b">0.8749</td>
                    <td className="py-2 px-4 border-b">0.8788 ± 0.0233</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Gradient Boosting</td>
                    <td className="py-2 px-4 border-b">0.8702</td>
                    <td className="py-2 px-4 border-b">0.8830 ± 0.0176</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">LightGBM</td>
                    <td className="py-2 px-4 border-b">0.8612</td>
                    <td className="py-2 px-4 border-b">0.8761 ± 0.0231</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">XGBoost</td>
                    <td className="py-2 px-4 border-b">0.8522</td>
                    <td className="py-2 px-4 border-b">0.8737 ± 0.0253</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-700 mt-4">
              Surprisingly, the simpler Logistic Regression model outperformed more complex tree-based models.
              This suggests that the relationship between weather features and rainfall is relatively linear,
              or that our feature engineering effectively captured the non-linear relationships.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">ROC Curves</h2>
            <p className="text-gray-700 mb-4">
              The Receiver Operating Characteristic (ROC) curve plots the true positive rate against the false positive rate
              at various threshold settings. The area under this curve (AUC) quantifies the model's ability to discriminate
              between rainfall and non-rainfall days.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Logistic Regression</h3>
                <div className="flex justify-center">
                  <Image 
                    src="/images/roc_curve_logistic_regression.png" 
                    alt="ROC Curve - Logistic Regression" 
                    width={350} 
                    height={280}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Random Forest</h3>
                <div className="flex justify-center">
                  <Image 
                    src="/images/roc_curve_random_forest.png" 
                    alt="ROC Curve - Random Forest" 
                    width={350} 
                    height={280}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Gradient Boosting</h3>
                <div className="flex justify-center">
                  <Image 
                    src="/images/roc_curve_gradient_boosting.png" 
                    alt="ROC Curve - Gradient Boosting" 
                    width={350} 
                    height={280}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">LightGBM</h3>
                <div className="flex justify-center">
                  <Image 
                    src="/images/roc_curve_lightgbm.png" 
                    alt="ROC Curve - LightGBM" 
                    width={350} 
                    height={280}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mt-6">
              All models show strong performance with AUC values above 0.85, significantly better than random prediction (AUC = 0.5).
              The Logistic Regression model's curve shows particularly good separation, especially in the high-sensitivity region.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Hyperparameter Tuning</h2>
            <p className="text-gray-700 mb-4">
              We performed hyperparameter tuning on the best-performing model (Logistic Regression) to further improve its performance.
              We used RandomizedSearchCV with 5-fold cross-validation to efficiently search the parameter space.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Tuned Parameters:</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>C</strong>: 10 (regularization strength, inverse of regularization parameter)</li>
                <li><strong>penalty</strong>: 'l2' (L2 regularization)</li>
                <li><strong>solver</strong>: 'sag' (Stochastic Average Gradient descent)</li>
                <li><strong>class_weight</strong>: None (no class weighting)</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Performance Improvement:</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Baseline Logistic Regression</strong>: Validation AUC = 0.8796</li>
                <li><strong>Tuned Logistic Regression</strong>: Validation AUC = 0.8797</li>
                <li><strong>Improvement</strong>: 0.02%</li>
              </ul>
            </div>
            
            <p className="text-gray-700 mt-4">
              The minimal improvement suggests that the default parameters were already well-suited for this problem.
              This is often the case with Logistic Regression when the data is well-preprocessed and the features are informative.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Model Stacking</h2>
            <p className="text-gray-700 mb-4">
              We implemented model stacking to potentially improve performance by combining the strengths of different models.
              We used the top three performing models (Logistic Regression, Random Forest, and Gradient Boosting) as base models
              and trained a meta-model (Logistic Regression) on their predictions.
            </p>
            
            <div className="flex justify-center my-6">
              <Image 
                src="/images/roc_curve_stacked_model.png" 
                alt="ROC Curve - Stacked Model" 
                width={500} 
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Stacking Results:</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Stacked Model</strong>: Validation AUC = 0.8751</li>
                <li><strong>Tuned Logistic Regression</strong>: Validation AUC = 0.8797</li>
                <li><strong>Comparison</strong>: Stacking did not improve performance in this case</li>
              </ul>
            </div>
            
            <p className="text-gray-700 mt-4">
              Interestingly, the stacked model performed slightly worse than the best individual model.
              This suggests that the models might be making similar errors, or that the Logistic Regression
              model already captures most of the signal in the data that can be extracted with these features.
            </p>
          </div>
        </section>

        <div className="flex justify-between mt-8">
          <Link href="/feature-engineering" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
            ← Feature Engineering
          </Link>
          <Link href="/results" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Final Results →
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
