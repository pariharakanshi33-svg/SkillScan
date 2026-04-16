import React from 'react';

interface JobLikelihoodProps {
    score: number;
}

const JobLikelihood: React.FC<JobLikelihoodProps> = ({ score }) => {
    // Calculate likelihood based on ATS score
    // Using a non-linear calculation to reflect that higher scores exponentially increase match chances
    const likelihood = Math.round(Math.min(98, Math.pow(score / 100, 1.3) * 100));

    let status = "Very Low";
    let colorClass = "from-red-500 to-red-600";
    let bgClass = "bg-red-50";
    let textColor = "text-red-700";

    if (score >= 85) {
        status = "Exceptional Match";
        colorClass = "from-emerald-500 to-emerald-600";
        bgClass = "bg-emerald-50";
        textColor = "text-emerald-700";
    } else if (score >= 70) {
        status = "Strong Match";
        colorClass = "from-green-500 to-green-600";
        bgClass = "bg-green-50";
        textColor = "text-green-700";
    } else if (score >= 50) {
        status = "Good Match";
        colorClass = "from-blue-500 to-blue-600";
        bgClass = "bg-blue-50";
        textColor = "text-blue-700";
    } else if (score >= 30) {
        status = "Moderate Match";
        colorClass = "from-yellow-500 to-yellow-600";
        bgClass = "bg-yellow-50";
        textColor = "text-yellow-700";
    }

    return (
        <div className={`rounded-2xl p-6 ${bgClass} border border-opacity-50 border-gray-200 shadow-sm transition-all duration-500`}>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">Job Match Likelihood</h3>
                    <p className={`text-sm font-medium ${textColor} mt-1`}>{status}</p>
                </div>
                <div className="text-right">
                    <span className="text-3xl font-black text-gray-900">{likelihood}%</span>
                    <p className="text-xs text-gray-500 font-medium">Estimated Probability</p>
                </div>
            </div>

            <div className="relative h-4 w-full bg-gray-200 rounded-full overflow-hidden mb-6">
                <div 
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${colorClass} transition-all duration-1000 ease-out rounded-full shadow-inner`}
                    style={{ width: `${likelihood}%` }}
                />
                
                {/* Marker lines */}
                <div className="absolute top-0 left-1/4 w-px h-full bg-white opacity-30" />
                <div className="absolute top-0 left-1/2 w-px h-full bg-white opacity-30" />
                <div className="absolute top-0 left-3/4 w-px h-full bg-white opacity-30" />
            </div>

            {/* Labels */}
            <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider px-1">
                <span>Poor</span>
                <span>Fair</span>
                <span>Good</span>
                <span>Excellent</span>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 border-opacity-40">
                <p className="text-sm text-gray-600 leading-relaxed italic animate-pulse-slow">
                    "Based on current market trends, resumes with an ATS score above 75 see a 3x higher interview rate."
                </p>
            </div>
        </div>
    );
};

export default JobLikelihood;
