import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import StudioNavBar from './components/studio/StudioNavBar';
import Logo from './components/studio/Logo';
import { getDefaultDocumentNode } from './utils/structure';
import { codeInput } from "@sanity/code-input";


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: 'default',
  title: 'thuta-blog backend',
  projectId,
  dataset,
  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode
  }), visionTool(), codeInput()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavBar
    }
  },
  theme: myTheme
})
