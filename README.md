
## React Native VR

> Small app for showcasing react-vr and a-frame capabilities integrated in a react native app

#### General Todos:
- [ ] Creating a VR Experience
- [ ] Downloading of VR Assets for a experience
- [ ] Updating VR Experience
- [ ] Create the Backend
- [ ] Connect to the Backend

#### Goals
- Have offline lightweight vr experiences
- Push VR experiences updates
- Reload/Resync VR Experiences on demand
- Have multiple VR Experiences
- Keep it performant
- Enjoy

#### Caveats/Solutions
- Need to inject css/html/js as text inside the vr components.
- Cannot access files (.js, .html, .css) that haven't been bundled.
  - In that case, we can't update code unless we recompile.
  - A workaround is to have a backend to download/update/sync
