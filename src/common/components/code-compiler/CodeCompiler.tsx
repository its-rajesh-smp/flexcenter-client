import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import {
  SandpackCodeEditor,
  SandpackConsole,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { Separator } from "@radix-ui/themes";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import "./style.css";

function CodeCompiler() {
  return (
    <SandpackProvider autoFocus template="static" theme="light">
      <SandpackLayout className="flex h-screen flex-col md:flex-row">
        <PanelGroup direction="horizontal">
          <Panel>
            {/* CODE EDITOR */}
            <SandpackCodeEditor
              showTabs={true}
              showRunButton
              extensions={[
                autocompletion({
                  filterStrict: true,
                }),
              ]}
              extensionsKeymap={[...completionKeymap]}
              wrapContent
              className="!h-full"
              closableTabs
              showLineNumbers
              showInlineErrors
            />
          </Panel>

          {/* RESIZER */}
          <PanelResizeHandle>
            <h1>sdhf</h1>
          </PanelResizeHandle>

          {/* PREVIEW RIGHT */}
          <Panel>
            <SandpackPreview className={`!h-[calc(100%-2.5rem)]`} />
          </Panel>

          <PanelResizeHandle>
            <h1>sdhf</h1>
          </PanelResizeHandle>

          <Panel>
            <SandpackConsole
              resetOnPreviewRestart={true}
              className={`!h-[calc(100%-2.5rem)]`}
            />
          </Panel>
        </PanelGroup>
      </SandpackLayout>
    </SandpackProvider>
  );
}

export default CodeCompiler;
