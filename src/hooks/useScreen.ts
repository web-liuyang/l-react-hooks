export type ScreenInfo = {
  width: number; // 属性返回以像素计的访问者屏幕宽度
  height: number; // 属性返回以像素计的访问者屏幕的高度
  availWidth: number; // 属性返回访问者屏幕的宽度，以像素计，减去诸如窗口工具条之类的界面特征。
  availHeight: number; // 属性返回访问者屏幕的高度，以像素计，减去诸如窗口工具条之类的界面特征
};

/** 获取屏幕信息 */
function useScreen(): ScreenInfo;

function useScreen(): ScreenInfo {
  const { width, height, availHeight, availWidth } = window.screen;

  return {
    width,
    height,
    availHeight,
    availWidth,
  } as const;
}

export default useScreen;
