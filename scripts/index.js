import { renderEntryInfo } from "./index-main/entryInfo.js";
import { renderEntryInfo2 } from "./index-main/entryInfo2.js";
import { renderEntryInfo3 } from "./index-main/entryInfo3.js";
import { renderGalleryInfo, renderGalleryPictureInfo } from "./index-main/entryInfo4.js";
import { showActiveSection } from "./logic/tabsActive.js";
import { gallerySectionToggle, galleryCategoryToggle } from "./logic/gallery.js";
import { conceptToggle, subConceptToggle, conceptListToggle } from "./logic/tab3/conceptToggle.js";

renderEntryInfo();
renderEntryInfo2();
renderEntryInfo3();

renderGalleryInfo();
renderGalleryPictureInfo()

showActiveSection();

gallerySectionToggle();
galleryCategoryToggle();

conceptToggle();
subConceptToggle();
conceptListToggle();

