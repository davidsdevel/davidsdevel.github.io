export default function TimelineCard({ number, title, description, codeExample, icon: Icon, direction = 'left' }) {
  return (
    <div className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 border border-purple-100 hover:border-curso-purple/30">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-lettercms-1 to-curso-purple text-white flex items-center justify-center font-bold text-lg">
          {number}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            {Icon && <Icon className="w-5 h-5 text-curso-purple flex-shrink-0" />}
            <h3 className="text-lg md:text-xl font-semibold text-main-1">{title}</h3>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

          {codeExample && (
            <div className="bg-main-1 rounded-lg p-4 overflow-x-auto">
              <code className="text-sm text-green-400 font-mono whitespace-pre">{codeExample}</code>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
