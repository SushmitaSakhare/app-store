// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, updateActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const activeTabClassName = isActive ? 'active' : ''

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        onClick={onClickTabItem}
        className={`tab-btn ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
