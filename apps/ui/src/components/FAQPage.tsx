import LABELS from "@labels"

export const FAQPage = () => {
  const { dictionary, general, bonusRules, stats, activity } = LABELS.faqPage

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
      
      <div>
        <h3>{dictionary.title}</h3>
        {dictionary.terms.map(({ term, definition }) => (
          <p key={term}>
            <strong>{term}</strong> - {definition}
          </p>
        ))}
      </div>

      <div>
        <h3>{general.title}</h3>
        <ul>
          {general.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>{bonusRules.title}</h3>
        <ul>
          {bonusRules.sections.map(section => (
            <li key={section.title}>
              {section.title}
              <ul>
                {section.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>{stats.title}</h3>
        <p>{stats.text}</p>
      </div>

      <div>
        <h3>{activity.title}</h3>
        <p>{activity.text}</p>
      </div>
    </div>
  )
}
