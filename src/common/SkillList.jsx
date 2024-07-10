

function SkillList({ src, skill }) {
  return (
    <span>
    <img src={src} alt="chckmark icon" />
    <p>{skill}</p>
    </span>
  )
}

export default SkillList