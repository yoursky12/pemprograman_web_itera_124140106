import { act, renderHook } from '@testing-library/react';
import useLocalStorage from './useLocalStorage.js';

describe('useLocalStorage', () => {
  beforeEach(() => localStorage.clear());

  it('memakai nilai awal bila storage kosong', () => {
    const { result } = renderHook(() => useLocalStorage('k', ['a']));
    expect(result.current[0]).toEqual(['a']);
  });

  it('menyimpan perubahan ke localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('k', []));
    act(() => result.current[1](['baru']));
    expect(JSON.parse(localStorage.getItem('k'))).toEqual(['baru']);
  });

  it('membaca nilai yang sudah tersimpan', () => {
    localStorage.setItem('k', JSON.stringify(['lama']));
    const { result } = renderHook(() => useLocalStorage('k', []));
    expect(result.current[0]).toEqual(['lama']);
  });
});
