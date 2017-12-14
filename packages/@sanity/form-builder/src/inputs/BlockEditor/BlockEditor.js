// @flow
import type {Element as ReactElement} from 'react'
import React from 'react'

import FullscreenDialog from 'part:@sanity/components/dialogs/fullscreen?'

import Editor from './Editor'
import Toolbar from './Toolbar/Toolbar'

import styles from './styles/BlockEditor.css'

import type {
  BlockContentFeatures,
  SlateChange,
  SlateValue,
  ToolbarStyle
} from './typeDefs'

type Props = {
  blockContentFeatures: BlockContentFeatures,
  editor: ReactElement<typeof Editor>,
  editorValue: SlateValue,
  fullscreen: boolean,
  editorIsFocused: boolean,
  onChange: (change: SlateChange) => void,
  onToggleFullScreen: void => void
}

export default class BlockEditor extends React.Component<Props> {

  shouldComponentUpdate(nextProps: Props) {
    return nextProps.fullscreen !== this.props.fullscreen
      || nextProps.editorValue !== this.props.editorValue
  }

  renderFullScreen() {
    return (
      <FullscreenDialog
        isOpen
        onClose={this.props.onToggleFullScreen}
      >
        {this.renderEditor()}
      </FullscreenDialog>
    )
  }

  renderEditor() {
    const {
      blockContentFeatures,
      editorValue,
      editor,
      fullscreen,
      onChange,
      onToggleFullScreen
    } = this.props
    const classNames = [styles.editor]
    if (fullscreen) {
      classNames.push(styles.fullscreen)
    }
    return (
      <div className={classNames.join(' ')}>
        <Toolbar
          blockContentFeatures={blockContentFeatures}
          editorValue={editorValue}
          fullscreen={fullscreen}
          onChange={onChange}
          onToggleFullScreen={onToggleFullScreen}
        />
        {editor}
      </div>
    )
  }

  render() {
    const {
      fullscreen,
    } = this.props
    return (
      <div className={styles.root}>
        {fullscreen ? this.renderFullScreen() : this.renderEditor()}
      </div>
    )
  }
}
